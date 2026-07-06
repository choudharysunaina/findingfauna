// Google Sheet setup:
// 1. Create a sheet with header row: slug, title, category, author, date, readTime, excerpt, coverImage, content, image1, image2, image3
// 2. One row = one blog post. Add a row to publish a new post.
// 3. coverImage / image1 / image2 / image3 hold filenames only (e.g. "cheetah-cub.jpg"),
//    matching a file uploaded to public/blog-images/ in this repo.
// 4. In the "content" cell, separate paragraphs with a blank line. To place image(s) after
//    a paragraph, put a marker alone on its own line: {{image:1}} for one image, {{image:1,2}}
//    for two side by side, or {{image:1,2,3}} for three side by side. Only image numbers with
//    a filename in their column render — leave a column blank to skip it.
// 5. File > Share > Publish to web > select this sheet > CSV > copy the link below.
export const BLOG_SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQptWehod2vlBrSIXl87dL-qwVN_33F4NU-YxVVVGpN0a7LVN-HiiQRzZSIp4NBW7w5iubPCYuzwBli/pub?gid=0&single=true&output=csv';
