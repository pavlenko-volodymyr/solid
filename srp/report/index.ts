type ReportData = {
    content: string,
    date: Date,
    size: number,
}

export enum ReportTypes {
    Html,
    Txt,
}

interface Formatter {
    format(data: ReportData): string
}

class HtmlFormatter implements Formatter {
    format(data: ReportData): string {
        return 'html string'
    }
}

class TxtFormatter implements Formatter {
    format(data: ReportData): string {
        return 'txt string'
    }
}

class FormatSelector {
    private static formatters = {
        [ReportTypes.Html]: HtmlFormatter,
        [ReportTypes.Txt]: TxtFormatter,
    }

    static selectFor(reportType: ReportTypes): Formatter {
        const FormatFactory = FormatSelector.formatters[reportType]
        return new FormatFactory()
    }
}

export class ReportExporter {
    name: string
    data: ReportData

    constructor(name: string, data: ReportData) {
        this.name = name
        this.data = data
    }

    export(reportType: ReportTypes): string {
        const formatter: Formatter = FormatSelector.selectFor(reportType)
        return formatter.format(this.data)
    }
}