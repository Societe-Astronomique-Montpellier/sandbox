import type { LinkResolverFunction } from "@prismicio/client";

const linkResolver: LinkResolverFunction = (document: never): string | null => {
    if ('article' === document.type) {
        return `/${document.uid}`;
    }
};

export default linkResolver;