import MarkdownIt from 'markdown-it'
import type { Options } from 'markdown-it'
import hljs from 'highlight.js'
import anchor from 'markdown-it-anchor'
import toc from 'markdown-it-toc-done-right'
import 'highlight.js/styles/github.css'

const options: Options = {
  html: true,
  linkify: true,
  highlight(code: string, lang?: string): string {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
}

const md = new MarkdownIt(options)
  .use(anchor, {
    permalink: anchor.permalink.linkInsideHeader({
      symbol: '',
      placement: 'before',
    }),
  })
  .use(toc)


export default md
