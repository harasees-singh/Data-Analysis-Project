import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
function PowerBI(){
    const accesstoken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTRmMjM0NzYtZDAyZi00MmRhLTljYWMtMGNlY2JhNTcyY2U5LyIsImlhdCI6MTY1MzAyNzkyNCwibmJmIjoxNjUzMDI3OTI0LCJleHAiOjE2NTMwMzMyOTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFhZEVvdUE5c09MZkxkL2UwUXJwM0MvcFdHTXhMRHZiQ1A5aUt3Skg1MlpiU0FOVGtsejY4Vmh2RHp2dWVTdVExSWIvVnZ0bTFUMHhYMVQrUWE1clZXekVub01TWHRVclRxN1FVWGljbXZSTT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiMjNkOGY2YmQtMWViMC00Y2MyLWEwOGMtN2JmNTI1YzY3YmNkIiwiYXBwaWRhY3IiOiIwIiwiaXBhZGRyIjoiMTI0LjI1My4yNTMuMTYxIiwibmFtZSI6ImNoYXJtYW5kZXIiLCJvaWQiOiI1YzhiNzIwYS1kYzZiLTQyMDYtYTkwOS1iMTI1ZWM1ZWYzZjEiLCJwdWlkIjoiMTAwMzIwMDFGQTg4MENFOCIsInJoIjoiMC5BWEVBZGpUeXBDX1Eya0tjckF6c3VsY3M2UWtBQUFBQUFBQUF3QUFBQUFBQUFBQ0hBT00uIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInN1YiI6InBiZ1p1SWFhcVVEM0NlV1J5X0dTWmFaU2pLeGhncTdBT3pxQU5lSkRpdEkiLCJ0aWQiOiJhNGYyMzQ3Ni1kMDJmLTQyZGEtOWNhYy0wY2VjYmE1NzJjZTkiLCJ1bmlxdWVfbmFtZSI6ImNoYXJtaUBpd2FudG1lc29tZXBvd2VyYmkub25taWNyb3NvZnQuY29tIiwidXBuIjoiY2hhcm1pQGl3YW50bWVzb21lcG93ZXJiaS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJiNlJ6TE1sdEoweXRBUnRQTllWakFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.DLDq4atrjtSTE10_-zAN-SEL7uk_DG3vjmR2vTDK7o7xrNHIM1ylt5Aoz2iqwSUXvXNgR59lmQ77MYtWJVODm-pr8x44qAiPus_FKA253xY8aootMWdq2Hf9gUI5PX-_oC-w6UJsvhmwX9mpxXUgOq2TQB1BzhUuBZUWbF7BEwHv_7cO1j5vAt49l6mTJ4a0PSLMbeXZRldYBcfXpSz6fLP5jKE5uOGzB_pug4cbBNv7SVkF5FS1mAeILxcVyTNijV7lEOpd0sWEXa-BR7xBHpbD4ahFjAG1spGDLUHkZjtXHJq6B1zJYs2UFr9942-eTFS892JcbhizcWT5gsq9Jg";
    const embedurl = "https://app.powerbi.com/reportEmbed?reportId=46784f8d-660f-479a-819f-58476f497150&autoAuth=true&ctid=a4f23476-d02f-42da-9cac-0cecba572ce9&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLWNlbnRyYWwtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9";
    const reportid = "46784f8d-660f-479a-819f-58476f497150";
    return(
        <div>
            <PowerBIEmbed
                embedConfig = {{
                    type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                    id: {reportid},
                    embedUrl: {embedurl},
                    accessToken: {accesstoken},
                    tokenType: models.TokenType.Aad,
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false
                            }
                        },
                        background: models.BackgroundType.Transparent,
                    }
                }}

                eventHandlers = { 
                    new Map([
                        ['loaded', function () {console.log('Report loaded');}],
                        ['rendered', function () {console.log('Report rendered');}],
                        ['error', function (event) {console.log(event.detail);}]
                    ])
                }
                    
                cssClassName = { "report-style-class" }

                getEmbeddedComponent = { (embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        </div>
    )
}
export default PowerBI;