import type { ServerWebSocket } from "bun";
import { finaliseStream } from "../utils/finaliseStream";
import type { ElysiaWS } from "elysia/ws";
import type { TSchema } from "elysia";

type StreamParams = {
    id: string
}

export async function getStream(ws: ElysiaWS<ServerWebSocket<{ id?: string; validator?: TypeCheck<TSchema>; }>>) {
    if (!ws.data.params.id) return ws.close(1000, 'Please specify a valid media identifier')
    if (!/^[A-Za-z0-9_-]{11}$/.test(ws.data.params.id))
        return ws.close(1000, 'Please specify a valid media identifier')

    await finaliseStream(ws.data.params.id, ws)
}
