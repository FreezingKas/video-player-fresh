import {Handlers} from "$fresh/src/server/types.ts";

export const handler: Handlers = {
    async GET(req, ctx) {
        // Range header for chunk size
        const range = req.headers.get("Range");

        const file_path = "./videos/test.mp4";

        const videoSize = (await Deno.stat(file_path)).size;

        let response;

        if (!range) {
            // No range header, send full file, bad idea but just in case
            const body = await Deno.readFile(file_path);

            response = new Response(body)
            response.headers.set("Content-Length", videoSize + "");
            response.headers.set("Content-Type", "video/mp4");
        }else{
            // Range header, get start and end bytes of the file
            let [startStr, endStr] = range.replace(/bytes=/, '').split('-');
            let start = parseInt(startStr, 10);
            let end = endStr ? parseInt(endStr, 10) : videoSize - 1;

            // calculate the size of the chunk
            const maxChunk = 1024 * 1024;
            if (((end - start + 1)) > maxChunk) {
                end = start + maxChunk - 1;
            }

            // Seek
            let seek;
            if(start === 0){
                seek = Deno.SeekMode.Start;
            }else if(end === videoSize - 1){
                seek = Deno.SeekMode.End;
            }else{
                seek = Deno.SeekMode.Current;
            }

            // Get bytes of the file
            const file = await Deno.open(file_path, {read: true});
            await Deno.seek(file.rid, start, seek);
            const content = new Uint8Array(end - start + 1);
            await file.read(content);
            file.close();

            // Create response Partial Content with a type of video/mp4

            response = new Response(content, {status: 206});
            response.headers.set("Content-Range", `bytes ${start}-${end}/${videoSize}`);
            response.headers.set("Accept-Ranges", "bytes");
            response.headers.set("Content-Length", ((end - start) + 1).toString());
            response.headers.set("Content-Type", "video/mp4");
        }

        return response;
    },
}
