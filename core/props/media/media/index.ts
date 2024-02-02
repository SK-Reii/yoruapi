export type MediaTitle = "NATIVE" | "JAPANESE" | "ENGLISH" | "SPANISH";
export type MediaFormat = "TV" | "MOVIE" | "OVA" | "MANGA" | "LIGHT_NOVEL" | "WEBTOON" | "WEB_NOVEL" | "OTHER";
export type MediaGenres = "ACTION" | "ADVENTURE" | "COMEDY" | "DRAMA" | "FANTASY" | "HORROR" | "MYSTERY" | "PSYCHOLOGICAL" | "ROMANCE" | "SCI-FI" | "SLICE OF LIFE" | "SUPERNATURAL" | "THRILLER" | "OTHER";
export type MediaCountryOfOrigin = "JAPAN" | "USA" | "SPAIN" | "OTHER";
export type MediaType = "ANIME" | "MANGA";

export interface MediaTags {
    name: string;
    description: string;
    percentage: number;
}

export interface MediaExternalLinks {
    site: string;
    url: string;
}

export interface MediaImages {
    base: string;
    large?: string;
    medium?: string;
    small?: string;
}

export interface MediaConstructor {
    id: number;
    title: Record<MediaTitle, string>;
    releaseDate?: Date;
    endDate?: Date;
    format: MediaFormat;
    genres: MediaGenres[];
    countryOfOrigin: MediaCountryOfOrigin;
    duration?: number;
    type: MediaType;
    synopsis?: string;
    coverImages: MediaImages[];
    nsfw: boolean;
    characters?: number[];
    staff?: number[];
    studios?: number[];
    licensors?: number[];
    tags?: MediaTags[];
    relatedMedia?: number[];
    reviews?: number[];
    recommendations?: number[];
    externalLinks?: MediaExternalLinks[];
    trailer?: string;
    banner?: MediaImages[];
}