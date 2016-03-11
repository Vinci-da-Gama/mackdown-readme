# mackdown-readme
This is a collecton of markdown example. you can find most syntax you need here.

### First Level Title is =
First Level Title
=

### Second Level Title is -
Second Level
-

### One Divider is ---
---

### basic Note
> **Note:** If the file has been removed from the website or the blog, the document will no longer be published on that location.

### complex Note
> **Note:**

> - Full access to **Google Drive** or **Dropbox** is required to be able to import any document in StackEdit. Permission restrictions can be configured in the settings.
> - Imported documents are downloaded in your browser and are not transmitted to a server.
> - If you experience problems saving your documents on Google Drive, check and optionally disable browser extensions, such as Disconnect.

### Tables

**Markdown Extra** has a special syntax for tables:

Item     | Value
-------- | ---
Computer | $1600
Phone    | $12
Pipe     | $1

You can specify column alignment with one or two colons:

| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |

### Code blocks

GitHub's fenced code blocks are also supported with **Highlight.js** syntax highlighting:

```
// Foo
var bar = 0;
```
---

### And here's some code! :+1:

```javascript
$(function(){
  $('div').html('I am a div.');
});
```

### SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                  | ASCII                        | HTML              |
 ----------------- | ---------------------------- | ------------------
| Single backticks | `'Isn't this fun?'`            | 'Isn't this fun?' |
| Quotes           | `"Isn't this fun?"`            | "Isn't this fun?" |
| Dashes           | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

### Icons
:+1:
:-1:

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

### email autolink, itself is a link
<address@gmail.com>

### image
![alt tag](https://github.com/Vinci-da-Gama/mackdown-readme/blob/master/public/images/matic-symbol.png "This is title (local image)")
![Alt tag](http://nnao.deviantart.com/art/Magic-circle-1-216198906 "Title for Image")

### Links Samples:

 * [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing
 * [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
 * [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
 * [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs

 This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.

---

### Links in Separated way:

Props to Mr. Doob and his [code editor][-1], from which
the inspiration to this, and some handy implementation hints, came.

> - about **Sequence diagrams** syntax [here][0]
> - [where is google?][1]

### links URL indicator (usually donot display)
[-1]: http://mrdoob.com/projects/code-editor/
[0]: http://bramp.github.io/js-sequence-diagrams/
[1]: https://www.google.com/?gfe_rd=cr&ei=FjjiVuzCE63u8weE7rD4Bw&gws_rd=cr&fg=1
