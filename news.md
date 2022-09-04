---
title: News
icon: newspaper-variant
description: Catch up with the latest WiiLink news.
---

<br>

<!--

To create a new news post, edit _posts/YYYY-MM-DD-issue-xx.md.
Copy the following at the very start of the file:
---
title: Issue xx
date: YYYY-MM-DD
layout: news-post
---

The following is an example of a news post's content:

## Title
Content

&mdash; Name
-->

{% comment %}
  We only want to show the 3 most recent posts under news itself.
{% endcomment %}
{% for post in site.posts limit: 3 %}
  <h1>
    <a href="{{ post.url }}">
      {{ post.title }} - {{ post.date | date: "%B %-d, %Y" }}
    </a>
  </h1>

  {{ post.content }}
{% endfor %}


# Older Posts
{% comment %}
  Posts beyond the 3 most recent will only be linked to.
{% endcomment %}
{% for post in site.posts offset: 3 %}
  <h2>
    <a href="{{ post.url }}">
      {{ post.title }} - {{ post.date | date: "%B %-d, %Y" }}
    </a>
  </h2>

  {{ post.content | strip_html | truncatewords: 50 }}
{% endfor %}