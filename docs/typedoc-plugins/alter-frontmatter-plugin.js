import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

export function load(app) {
    app.renderer.on(
        MarkdownPageEvent.BEGIN,
        /** @param {MarkdownPageEvent} page */
        (page) => {
            if (page.filename.endsWith('README.md')) {
                page.frontmatter = {
                    ...page.frontmatter,
                    draft: true,
                    pagefind: false
                };
            }

            if (page.model.comment?.blockTags.some(tag => tag.tag === '@todo')) {
                page.frontmatter = {
                    sidebar: {
                        badge: {
                            text: 'TODO',
                            variant: 'caution'
                        }
                    },
                    ...page.frontmatter
                };
            }

            page.frontmatter = {
                ...page.frontmatter,
                editUrl: false
            };
        }
    );
}
