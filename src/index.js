import querystring from "querystring";
import cheerio from "cheerio";
import request from "request-promise";
import visit from "async-unist-util-visit";

export default async ({ markdownAST }, options = {}) => {
  const baseUrl = `https://www.figma.com/api/oembed?url=`;
  return await visit(markdownAST, async node => {
    if (
      node.type !== "inlineCode" ||
      !node.value.startsWith("https://www.figma.com/")
    ) {
      return;
    }

    const url = node.value;
    const body = await request(""+ url);
    const embedObj = JSON.parse(body);
    const $ = cheerio.load(runkitObj.html);
    const oEmbed = $('iframe');
    oEmbed.attr('style', '');
    oEmbed.attr('scrolling', 'yes');
    oEmbed.attr('width', '100%');
    oEmbed.attr('height', embedObj.height);

    node.type = "html";
    node.value = $.root().html();

    return markdownAST;
  });
};
