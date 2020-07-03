import { ReportExporter, ReportTypes } from './index'

test('ReportExporter', () => {
    const name = "weekly"
    const data = {
        content: 'Some info',
        date: new Date(),
        size: 10
    }
    const reportExporter = new ReportExporter(name, data)
    expect(reportExporter.export(ReportTypes.Html)).toBe('html string')
    expect(reportExporter.export(ReportTypes.Txt)).toBe('txt string')
})