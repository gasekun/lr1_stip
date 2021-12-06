<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="timetable">
        <html>
            <head>
                
                    <title>LR 9</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
                </head>
                <body>
                    <h2 width="100%" style="text-align: center">Маршруты</h2>
                    <table class="table">
                        <tr>
                            <th>Направление</th>
                            <th>Остановки</th>
                            <th>Дата</th>
                            <th>Время отправки</th>
                            <th>Цена</th>
                            <th>Свободных мест</th>
                        </tr>
                        <xsl:for-each select="path">
                            <!-- <xsl:sort select="way" order="descending"/> -->
                            <!-- <xsl:if test="position()!=last()">-->
                            <tr>
                                <td>
                                    <xsl:value-of select="way" />
                                </td>
                                <td>
                                    <ul>
                                        <xsl:for-each select="stops/stop">
                                            <li>
                                                <xsl:value-of select="." />
                                            </li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                                <td>
                                    <xsl:value-of select="datestart" />
                                </td>
                                <td>
                                    <ul>
                                        <xsl:for-each select="timesstart/timestart">
                                            <li>
                                                <xsl:apply-templates select="." />
                                            </li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                                <td>
                                    <xsl:value-of select="price" />
                                </td>
                                <td>
                                    <xsl:value-of select="countfreeplaces" />
                                </td>
                            </tr>
                            <!-- </xsl:if> -->

                        </xsl:for-each>
                    </table>
                </body>
            </html>
        </xsl:template>
    </xsl:stylesheet>