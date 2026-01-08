<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem 1rem;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 2rem;
            text-align: center;
          }
          .header h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          .header p {
            font-size: 1.125rem;
            opacity: 0.9;
          }
          .info-box {
            background: #f3f4f6;
            border-left: 4px solid #3b82f6;
            padding: 1.5rem;
            margin: 2rem;
            border-radius: 0.5rem;
          }
          .info-box h2 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #1e3a8a;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .info-box p {
            color: #4b5563;
            line-height: 1.8;
          }
          .info-box code {
            background: white;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: 'Courier New', monospace;
            color: #1e3a8a;
            font-size: 0.875rem;
          }
          .subscribe-btn {
            display: inline-block;
            background: #3b82f6;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            margin-top: 1rem;
            transition: background 0.2s;
          }
          .subscribe-btn:hover {
            background: #2563eb;
          }
          .posts {
            padding: 2rem;
          }
          .posts h2 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #111827;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid #e5e7eb;
          }
          .post {
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            transition: background 0.2s;
          }
          .post:hover {
            background: #f9fafb;
          }
          .post:last-child {
            border-bottom: none;
          }
          .post-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          .post-title a {
            color: #1e3a8a;
            text-decoration: none;
          }
          .post-title a:hover {
            color: #3b82f6;
            text-decoration: underline;
          }
          .post-meta {
            color: #6b7280;
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          .post-description {
            color: #4b5563;
            line-height: 1.8;
          }
          .tag {
            background: #dbeafe;
            color: #1e3a8a;
            padding: 0.25rem 0.75rem;
            border-radius: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
          }
          .footer {
            text-align: center;
            padding: 2rem;
            background: #f9fafb;
            color: #6b7280;
            font-size: 0.875rem;
          }
          .footer a {
            color: #3b82f6;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          @media (max-width: 640px) {
            body {
              padding: 1rem;
            }
            .header h1 {
              font-size: 1.5rem;
            }
            .info-box, .posts {
              padding: 1rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📡 <xsl:value-of select="/rss/channel/title"/></h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
          </div>

          <div class="info-box">
            <h2>🎯 What is an RSS Feed?</h2>
            <p>
              This is an RSS feed. It allows you to subscribe to updates from this blog using an RSS reader.
              Copy the URL <code><xsl:value-of select="/rss/channel/link"/>/rss.xml</code> and paste it into your favorite RSS reader to stay updated!
            </p>
            <a href="https://aboutfeeds.com/" target="_blank" class="subscribe-btn">Learn More About RSS</a>
          </div>

          <div class="posts">
            <h2>Recent Posts (<xsl:value-of select="count(/rss/channel/item)"/>)</h2>
            <xsl:for-each select="/rss/channel/item">
              <div class="post">
                <div class="post-title">
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="link"/>
                    </xsl:attribute>
                    <xsl:value-of select="title"/>
                  </a>
                </div>
                <div class="post-meta">
                  <span>📅 <xsl:value-of select="substring(pubDate, 0, 17)"/></span>
                  <xsl:if test="author">
                    <span>•</span>
                    <span>✍️ <xsl:value-of select="author"/></span>
                  </xsl:if>
                  <xsl:if test="category">
                    <span>•</span>
                    <xsl:for-each select="category">
                      <span class="tag"><xsl:value-of select="."/></span>
                    </xsl:for-each>
                  </xsl:if>
                </div>
                <div class="post-description">
                  <xsl:value-of select="description"/>
                </div>
              </div>
            </xsl:for-each>
          </div>

          <div class="footer">
            <p>
              Powered by <a href="https://astro.build" target="_blank">Astro</a> •
              Visit <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="/rss/channel/link"/>
                </xsl:attribute>
                lorenzoiovino.com
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
