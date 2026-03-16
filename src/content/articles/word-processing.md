---
title: "What Is Word Processing?"
slug: word-processing
description: "Word processing is the creation, editing, formatting, and printing of text documents using software, from basic letters to complex reports and manuscripts."
category: technology
tags: ["software", "word processing", "productivity"]
heroImage: "/images/articles/word-processing-hero.webp"
heroAlt: "Editorial photograph representing the concept of word processing"
author: "WhatIs Editorial"
datePublished: "2025-07-15"
dateModified: "2025-07-15"
readingTime: 9
wordCount: 2394
tier: "2"
relatedArticles: ["desktop-publishing", "information-systems", "computer-hardware", "app-development", "digital-marketing"]
externalSources:
  - title: "Computer History Museum - Word Processing"
    url: "https://www.computerhistory.org/revolution/the-web/20"
  - title: "Stanford University Libraries - History of Documents"
    url: "https://library.stanford.edu/research/digitization-services"
  - title: "Microsoft Office Documentation"
    url: "https://support.microsoft.com/en-us/word"
  - title: "The Document Foundation - LibreOffice"
    url: "https://www.libreoffice.org/"
faq:
  - q: "What is the difference between word processing and text editing?"
    a: "A text editor works with plain, unformatted text and is designed for writing code or simple notes. A word processor adds formatting capabilities like fonts, bold and italic text, headers, page layout, tables, images, and printing controls. Word processors produce formatted documents; text editors produce plain text files."
  - q: "Is Google Docs a word processor?"
    a: "Yes. Google Docs is a cloud-based word processor that runs in your web browser. It offers most of the formatting and editing features found in desktop word processors like Microsoft Word, with the added advantage of real-time collaboration where multiple people can edit the same document simultaneously."
  - q: "What is the most popular word processor?"
    a: "Microsoft Word is the most widely used word processor globally, with hundreds of millions of users across business, education, and personal use. Google Docs is the second most popular, especially in education and among teams that prioritize collaboration. LibreOffice Writer is the leading free and open-source alternative."
  - q: "Can word processors open PDF files?"
    a: "Some word processors can import PDFs with varying success. Microsoft Word can open PDFs and convert them to editable documents, though complex formatting may not translate perfectly. For precise PDF editing, dedicated PDF editors like Adobe Acrobat are more reliable. Google Docs can also open and edit PDFs."
  - q: "What file format should I save my documents in?"
    a: "For documents you'll share with others, DOCX (Microsoft Word format) is the safest choice for maximum compatibility. PDF is best when you want the document to look the same on any device and don't need editing. ODT (Open Document Format) is the open standard supported by LibreOffice and most word processors. For plain text, use TXT."
---

# What Is Word Processing?

Word processing is the use of software to create, edit, format, store, and print text-based documents. A word processor is the application that does this work -- programs like Microsoft Word, Google Docs, and LibreOffice Writer that let you type text, arrange it on pages, add formatting and images, and produce finished documents ready for printing or sharing.

## From Typewriters to Software: A History

The term "word processing" was coined by IBM in the late 1960s to market their Magnetic Tape Selectric Typewriter (MT/ST) -- a modified electric typewriter that could record keystrokes on magnetic tape. If you made a mistake, you could backspace and retype. If you needed another copy, the machine would replay the tape automatically. It sounds primitive now, but for secretaries who had been retyping entire letters to fix a single error, it was a genuine revolution.

Dedicated word processing machines dominated offices through the 1970s. Wang Laboratories became a billion-dollar company selling dedicated word processors -- standalone machines with screens, keyboards, and printers that did nothing but process text. In 1978, a Wang word processor cost around $30,000 (roughly $140,000 in today's dollars). Offices that could afford them transformed their [productivity](/productivity).

The personal computer changed everything. When the IBM PC launched in 1981, software developers immediately saw the opportunity. WordStar (1978) was already [running](/running) on CP/M systems. WordPerfect arrived in 1979 and became the dominant word processor of the 1980s, especially beloved by legal professionals for its reveal codes feature that let you see exactly what formatting was applied.

Then came Microsoft Word. First released for MS-DOS in 1983 and for Macintosh in 1985, Word initially struggled against WordPerfect's installed base. But when Windows 3.0 launched in 1990, Word for Windows had the advantage -- it was designed for graphical interfaces from the start, while WordPerfect was still a DOS application with a Windows version that felt bolted on. By the mid-1990s, Word had won the office word processor war and hasn't looked back.

The 2000s brought cloud-based word processing. Writely, a browser-based word processor, launched in 2005 and was acquired by Google in 2006, becoming Google Docs. The idea that you could write a document in a web browser, collaborate with others in real time, and never worry about saving or losing files was -- frankly -- magical when it first worked.

## How Word Processors Work Under the Hood

When you type in a word processor, you're not just entering characters. You're creating a structured document with layers of information.

### Document Structure

Modern word processor files (like DOCX) are actually compressed archives containing XML files and embedded resources. The main document text is stored in XML with tags that define paragraphs, runs of text with consistent formatting, and structural elements. Separately, style definitions, themes, images, and metadata are stored in their own files within the archive.

This is why a Word document that contains nothing but "Hello World" is still about 12 KB -- there's a lot of structural information wrapped around those two words. It's also why DOCX files can sometimes be recovered even when corrupted: since they're ZIP archives, individual components can be extracted and rebuilt.

### Text Rendering

Turning stored characters into visible text on screen involves [typography](/typography) engines that handle font rendering, kerning (adjusting space between specific letter pairs), line breaking (deciding where to wrap text to a new line), hyphenation, and justification. These calculations happen continuously as you type, and they're more complex than you might think.

Justification -- making text align with both left and right margins -- requires the word processor to calculate optimal spacing between words and sometimes between individual letters. The [algorithms](/algorithms) for this go back to Donald Knuth's TeX system from 1978, which solved the line-breaking problem so elegantly that its approach still influences modern [typesetting](/typesetting).

### WYSIWYG

"What You See Is What You Get" -- the principle that the document on screen should look the same as the printed output -- seems obvious now but was revolutionary in the 1980s. Before WYSIWYG, word processors showed raw text with formatting codes. You couldn't see bold text as bold; you saw codes like `{B}text{/B}` or had to print a page to check your formatting.

The Xerox Star (1981) and Apple Macintosh (1984) introduced WYSIWYG to personal computers. Today, every mainstream word processor is WYSIWYG, though markup-based [writing](/writing) tools (like LaTeX and Markdown) retain the older approach for users who prefer explicit control over their formatting.

## Key Features of Modern Word Processors

### Formatting

At minimum, every word processor handles:

- **Character formatting**: Font face, size, color, bold, italic, underline, strikethrough, superscript, subscript
- **Paragraph formatting**: Alignment (left, center, right, justified), line spacing, indentation, space before and after paragraphs
- **Page formatting**: Margins, orientation (portrait/field), page size, headers, footers, page numbers
- **Lists**: Bulleted and numbered lists with customizable styles and nesting

### Styles

Styles are named collections of formatting attributes that you can apply consistently throughout a document. Instead of manually formatting every heading to be 18pt, bold, blue, Helvetica, you create a "Heading 2" style with those attributes and apply it with one click.

This sounds like a minor convenience, but styles are actually the single most important feature for producing professional documents. They ensure consistency (every heading looks the same), enable automatic table of contents generation (the processor knows which paragraphs are headings), and allow global formatting changes (update the style, and every instance updates automatically).

Most people never learn to use styles properly. They manually format everything, which works for short documents but becomes a maintenance nightmare for anything longer than a few pages. If you take one thing away from this article, let it be this: learn styles.

### Track Changes and Collaboration

Track changes -- the ability to record edits so that reviewers can see what changed and accept or reject modifications -- is essential for collaborative writing. Microsoft Word's track changes feature has been the standard for [business](/business-administration) document review for decades.

Google Docs took collaboration further with real-time co-[editing](/editing), where multiple people can type in the same document simultaneously and see each other's cursors and changes instantly. This capability, once considered bleeding-edge, is now expected in any serious word processor.

Comments and suggestions provide additional collaboration layers. Reviewers can add marginal comments without modifying the text, and Google Docs' "Suggesting" mode lets editors propose changes that the document owner can accept or reject -- similar to Word's track changes but integrated into the real-time editing experience.

### Tables and Layout

Tables in word processors serve two purposes: presenting tabular data (like a spreadsheet embedded in your document) and controlling layout (placing content side by side). Modern word processors handle the first well; the second is where [desktop publishing](/desktop-publishing) tools start to outperform them.

Complex layouts with multiple columns, text wrapping around images, and precise element positioning push word processors to their limits. If your document starts feeling more like a magazine layout than a text document, you probably need a DTP tool like Adobe InDesign or Affinity Publisher.

### Mail Merge

Mail merge combines a document template with a data source (like a spreadsheet of names and addresses) to produce personalized copies. It's how organizations send personalized letters, invoices, labels, and certificates to hundreds or thousands of recipients.

The process is straightforward: create a template with placeholder fields, connect it to your data source, and the word processor generates a document for each row of data. Microsoft Word's mail merge feature handles this well, and most other word processors support similar functionality.

## The Major Word Processors Today

### Microsoft Word

Word dominates the professional and business world. It's the word processor that people mean when they say "word processor" without specifying which one. Part of the Microsoft 365 suite (formerly Office 365), Word is available as a desktop application for Windows and macOS, a mobile app, and a web application.

Word's strength is its depth. Advanced features include section breaks with different page layouts, complex header/footer configurations, field codes for active content, macros for automation, equation editing, bibliography [management](/management), and extensive table of contents and indexing features. Legal professionals use Word's compare documents and redaction features. Academics use its citation and bibliography tools.

Word's weakness is its complexity. Most users access maybe 10% of its features. The ribbon interface, introduced in Office 2007, helps organize features but still presents an overwhelming number of options to casual users.

### Google Docs

Google Docs is the word processor that proved cloud-based software could work. It's free, runs entirely in a browser, and saves automatically to Google Drive. For [education](/education), casual writing, and collaborative work, it's become the default choice for many people.

Real-time collaboration is Google Docs' killer feature. Sharing a document and editing together happens without any friction -- no emails, no version confusion, no "Track Changes" to reconcile. The revision history lets you see every change ever made and revert to any previous state.

The tradeoff is that Google Docs lacks many of Word's advanced features. Complex page layouts, sophisticated table of contents formatting, and advanced field codes aren't available. For simple to moderately complex documents, Google Docs is excellent. For a 300-page thesis or a legal brief with specific formatting requirements, Word is still the better tool.

### LibreOffice Writer

LibreOffice Writer is the free, open-source alternative that deserves more credit than it gets. Developed by The Document Foundation, it handles DOCX files well (though not perfectly), supports Open Document Format natively, and provides professional-grade features including master documents, extensive style management, and a solid bibliography system.

Writer runs on Windows, macOS, and Linux, making it the go-to word processor for Linux users and organizations that prefer open-source software. [Government](/government) agencies in several countries (including Italy and France) have adopted LibreOffice as their standard office suite.

### Apple Pages

Pages is Apple's word processor, included free with every Mac and available on iPad and iPhone. Its strength is design -- Pages produces beautiful documents with minimal effort, and its template collection is genuinely impressive. For personal documents, newsletters, and visually appealing reports, Pages is excellent.

Its weakness is interoperability. While Pages can export to DOCX and PDF, documents with complex formatting don't always translate perfectly between Pages and Word. In a mixed-platform workplace, this creates friction.

### Markdown and Plain Text

Not technically word processors, but worth mentioning: a growing number of writers, developers, and content creators have abandoned WYSIWYG word processors in favor of writing in Markdown -- a lightweight markup language where you type `**bold**` for **bold** and `# Heading` for a heading.

Markdown editors like Obsidian, Typora, and iA Writer offer a distraction-free writing experience. The files are plain text, readable by any software, and version-controllable with Git. Markdown can be converted to HTML, PDF, DOCX, and dozens of other formats using tools like Pandoc.

This approach appeals to people who find WYSIWYG formatting distracting or unreliable. When you write in Markdown, what you see is exactly what you typed -- no hidden formatting codes to cause mysterious layout problems.

## File Formats: What You Need to Know

The format you save your document in matters more than most people realize.

**DOCX** (Office Open XML): Microsoft Word's default format since 2007. It's the de facto standard for exchanging formatted documents. Nearly every word processor can open DOCX files, though formatting fidelity varies.

**DOC**: The older Microsoft Word format, now largely obsolete. Some organizations still use it, but there's no good reason to save new documents in DOC format.

**ODT** (Open Document Format): An open standard maintained by OASIS and used by LibreOffice, Apache OpenOffice, and supported by most word processors. It's the preferred format for organizations concerned about vendor lock-in.

**PDF** (Portable Document Format): Not a word processing format but the universal format for sharing finished documents. A PDF looks identical on every device and operating system. Adobe created it, but it's now an ISO standard.

**RTF** (Rich Text Format): A Microsoft-developed format that's readable by virtually every word processor. It supports basic formatting but not advanced features. Useful as a lowest-common-denominator exchange format.

**TXT**: Plain text with no formatting. Universal but limited.

## Word Processing vs. Other Document Tools

Word processors overlap with several other categories of software, and knowing when to switch tools saves enormous frustration.

**Spreadsheets** ([Excel](https://www.microsoft.com/en-us/microsoft-365/excel), Google Sheets) handle numerical data, calculations, and tabular information. If your document is mostly numbers in rows and columns, use a spreadsheet.

**[Desktop publishing](/desktop-publishing)** (InDesign, Publisher, Affinity Publisher) handles complex visual layouts -- magazines, brochures, posters, books. When precise control over text flow, image placement, and multi-column layouts matters, DTP tools vastly outperform word processors.

**Note-taking apps** (OneNote, Notion, Obsidian) handle quick notes, web clipping, and loosely structured information. They're more flexible than word processors for capturing and organizing ideas but less capable for producing finished documents.

**Presentation software** (PowerPoint, Google Slides, Keynote) creates visual presentations. Some people write documents in PowerPoint, which is like using a hammer to turn a screw -- it technically works, but there are better tools.

## The Future of Word Processing

Word processing is evolving in several directions simultaneously.

**AI integration** is the biggest shift. Microsoft's Copilot in Word can draft text, summarize documents, rewrite paragraphs in different tones, and answer questions about document content. Google's Gemini integration offers similar capabilities in Docs. These tools don't replace human judgment, but they accelerate routine writing tasks.

**Collaboration continues to deepen.** Real-time editing is table stakes now; the frontier is asynchronous collaboration with better tools for managing feedback, tracking decisions, and maintaining document quality across large teams.

**Format convergence** is blurring the line between word processing, note-taking, and [project management](/project-management). Tools like Notion and Coda combine document writing with databases, task management, and workflow automation in a single interface.

**Accessibility** is receiving overdue attention. Word processors are adding better tools for checking reading level, alt text for images, heading structure validation, and color contrast -- helping authors create documents that work for everyone, including people using screen readers or other assistive technology.

Despite all these changes, the core function remains what it's always been: helping people put words on a page, arrange them clearly, and share them with others. That's a remarkably durable need -- one that started with clay tablets and quill pens and shows no signs of diminishing in the digital age.
