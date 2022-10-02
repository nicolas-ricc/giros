type sections = "top" | "middle" | "bottom" | "end"
type content = "articles" | "visualArt"

export const feedSectionConfig: Record<sections, Record<content, number>> = {
    top: {
        articles: 6,
        visualArt: 1
    },
    middle: {
        articles: 8,
        visualArt: 0
    },
    bottom: {
        articles: 4,
        visualArt: 1
    },
    end: {
        articles: 0,
        visualArt: 0
    }
}