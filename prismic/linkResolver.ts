import type { LinkResolverFunction } from "@prismicio/client";

const linkResolver: LinkResolverFunction = (document: any): string | null => {
    if ('article' === document.type) {
        return `/${document.uid}`;
    }

    return null;
};

export default linkResolver;