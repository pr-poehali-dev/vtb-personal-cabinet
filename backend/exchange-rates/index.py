import json
import urllib.request


def handler(event: dict, context) -> dict:
    """Возвращает актуальные курсы валют ЦБ РФ (USD, EUR, CNY) для раздела Инвестиции"""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    try:
        req = urllib.request.Request(
            'https://www.cbr-xml-daily.ru/daily_json.js',
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        with urllib.request.urlopen(req, timeout=4) as resp:
            data = json.loads(resp.read().decode('utf-8'))

        valute = data.get('Valute', {})
        result = {
            'date': data.get('Date'),
            'rates': {
                'USD': round(valute.get('USD', {}).get('Value', 0), 2),
                'EUR': round(valute.get('EUR', {}).get('Value', 0), 2),
                'CNY': round(valute.get('CNY', {}).get('Value', 0), 2)
            }
        }

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps(result)
        }
    except Exception:
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'date': None,
                'rates': {'USD': 0, 'EUR': 0, 'CNY': 0},
                'error': 'unavailable'
            })
        }
