interface Photo {
    id: number;
    height: number;
    width: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    src: {
        landspace: string;
        large: string;
        large2x: string;
        medium: string;
        original: string;
        portrait: string;
        small: string;
        tiny: string;
    };
}