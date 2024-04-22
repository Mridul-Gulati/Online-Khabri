import { google } from 'googleapis';

async function handler(req, res) {
    if (req.method === "POST") {
        const { Email } = req.body;
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.PRIVATE_KEY
            },
            scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/spreadsheets']
        });
        const sheets = google.sheets({ version: 'v4', auth });
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: "1mf5F7B4PWYaOyT2b1nwV6qqtbwFr1X4vz9hl1VwXBmg",
            range: 'Sheet1!A2:A',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[Email]]
            }
        });
        res.status(201).json({ success: true, response: res.data });
    }
    res.status(200).json({ success: true, response: res.data });
}

export default handler;