import { searchEndPoint, translateEndPoint, trendingEndPoint, randomEndPoint } from "./request";

export function endPointSelector(mode, endPoint, input) {
    if (mode === "GIFs"){
        switch (endPoint) {
            case 0:
                searchEndPoint(mode.toLowerCase(),'search', input);
                break;
            case 1:
                translateEndPoint(mode.toLowerCase(),'translate', input);
                break;
            case 2:
                trendingEndPoint(mode.toLowerCase(),'trending');
                break;
            case 3:
                randomEndPoint(mode.toLowerCase(),'random', input);
                break;
        }
    } else if (mode === "Stickers") {
        switch (endPoint) {
            case 0:
                searchEndPoint(mode.toLowerCase(),'search', input);
                break;
            case 1:
                translateEndPoint(mode.toLowerCase(),'translate', input);
                break;
            case 2:
                trendingEndPoint(mode.toLowerCase(),'trending');
                break;
            case 3:
                randomEndPoint(mode.toLowerCase(),'random', input);
                break;
        }
    }
}