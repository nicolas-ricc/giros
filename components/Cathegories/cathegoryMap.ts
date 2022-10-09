export const cathegoryMap = (cathegory): Record<"title" | "url" | string, string> => {
    const urlMap = (cath) => {
        switch (cath) {
            case 'Artes visuales':
                return 'visual-art'
            default:
                return cath
        }
    }
    return {
        title: cathegory,
        url: urlMap(cathegory)
    }

}