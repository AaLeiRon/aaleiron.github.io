Editable bilingual portfolio (DE/EN)

Important:
1. Edit all page texts in js/content.js
2. Add blog posts in two steps:
   - create a new file in /blog based on blog/post-template.html
   - add the new post to BLOG_POSTS in js/content.js
3. Local preview:
   python -m http.server 8000
   then open http://localhost:8000
4. Publish:
   git add .
   git commit -m "update website"
   git push
