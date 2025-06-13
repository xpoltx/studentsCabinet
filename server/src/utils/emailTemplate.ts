export const EMAIL_VERIFY_TEMPLATE = `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ваш код підтвердження</title>
    <style>
        body {
            font-family: sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        .code {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: center;
            font-size: 1.2em;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Шановний користувач,</p>
        <p>Дякуємо за реєстрацію. Ось ваш код підтвердження:</p>
        <div class="code">
            {{ver_token}}
        </div>
        <p>Будь ласка, скопіюйте та вставте цей код для підтвердження вашого облікового запису.</p>
    </div>
</body>
</html>`