import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { parseStringPromise } from 'xml2js';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/tygia', async (req, res) => {
  try {
    const response = await fetch('https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx');
    const xml = await response.text();

    const json = await parseStringPromise(xml, { explicitArray: false });

    const exrates = json.ExrateList.Exrate;
    const usd = exrates.find(rate => rate.$.CurrencyCode === 'USD');

    res.json({
      currency: 'USD',
      buy: usd.$.Buy,
      transfer: usd.$.Transfer,
      sell: usd.$.Sell
    });
  } catch (err) {
    res.status(500).send('Lỗi xử lý dữ liệu: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server proxy đang chạy tại http://localhost:${PORT}`);
});
