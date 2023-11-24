# Qurizziz App

tulis deskripsi disini

### 1. Available endpoints for Public site

- POST /register
- POST /login
- POST /google-login

- GET /surah
- GET /verse
- GET /users
- PATCH /user-points

### 2. Global error

- 500

## 1. POST /register

Endpoint to create account user

#### Request-Body

```js
{
    email: "string",
    password: "string"
}
```

Response (201- created)

```js
{
    "msg": "User id ${id} successfully created"
}
```

Response (400 - Bad Request)

```js
{
    "message": "Email can't be empty",
    "status": 400
}
OR;
{
    "message": "Password can't be empty",
    "status": 400
}
OR
{
    "message": "Invalid email format",
    "status": 400
}
OR
{
    "message": "Email is registered",
    "status": 400
}
OR
{
    "message": "Password must contain at least 5 characters",
    "status": 400
}
```

Response (500 - Global Error)

```js
{
  message: "Internal Server Error";
}
```

## 2. POST /login

#### Request-Body

```js
{
    email: "string",
    password: "string"
}
```

Response (200 - OK)

```js
{
    "id": integer,
    "access_token": "<access_token>"
}
```

Response (400 - Bad Request)

```js
{
    "message": "Please Input Email/Password",
    "status": 400
}
OR;
{
    "message": "Invalid Email/Password",
    "status": 400
}
OR
{
    "message": "Invalid Login",
    "status": 400
}
```

## 3. POST /google-login

#### Request-Headers

```js
{
    token: 'string',

}
```

Response (200 - OK)

```js
{
    "access_token": "<access_token>"
}
```

## 4. GET /surah

Request

- headers:

```json
{
  "Authorization": "Bearer <string token>"
}
```

Response (200 - OK)

```json
{
  "data": {
    "data": [
      {
        "question": "ثُمَّ كَلَّا سَيَعْلَمُونَ",
        "options": [
          {
            "text": "Ash-Sharh",
            "value": 0
          },
          {
            "text": "An-Naba",
            "value": 1
          },
          {
            "text": "An-Nazi'at",
            "value": 0
          },
          {
            "text": "Al-Inshiqaq",
            "value": 0
          }
        ]
      },
      {
        "question": "بِأَىِّ ذَنۢبٍ قُتِلَتْ",
        "options": [
          {
            "text": "At-Tin",
            "value": 0
          },
          {
            "text": "'Abasa",
            "value": 0
          },
          {
            "text": "At-Takwir",
            "value": 1
          },
          {
            "text": "At-Tariq",
            "value": 0
          }
        ]
      },
      {
        "question": "يَتِيمًا ذَا مَقْرَبَةٍ",
        "options": [
          {
            "text": "Al-Balad",
            "value": 1
          },
          {
            "text": "Al-Ma'un",
            "value": 0
          },
          {
            "text": "Ad-Duhaa",
            "value": 0
          },
          {
            "text": "Al-'Alaq",
            "value": 0
          }
        ]
      },
      {
        "question": "سَنَدْعُ ٱلزَّبَانِيَةَ",
        "options": [
          {
            "text": "Al-Humazah",
            "value": 0
          },
          {
            "text": "At-Takwir",
            "value": 0
          },
          {
            "text": "Al-Buruj",
            "value": 0
          },
          {
            "text": "Al-'Alaq",
            "value": 1
          }
        ]
      },
      {
        "question": "لَّا تَسْمَعُ فِيهَا لَـٰغِيَةً",
        "options": [
          {
            "text": "Al-Ghashiyah",
            "value": 1
          },
          {
            "text": "Al-Qari'ah",
            "value": 0
          },
          {
            "text": "Al-Balad",
            "value": 0
          },
          {
            "text": "An-Naba",
            "value": 0
          }
        ]
      }
    ],
    "meta": {
      "type": "guessSurahBySurah",
      "select": [
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
        96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
        111, 112, 113, 114
      ],
      "amount": 5
    }
  }
}
```

Response (401 - Unauthorized)

```json
{
  "message": "Unauthorized",
  "status": 401
}
```

## 5. GET /verse

Request

- headers:

```json
{
  "Authorization": "Bearer <string token>"
}
```

Response (200 - OK)

```json
{
  "data": {
    "data": [
      {
        "question": "عَيْنًا يَشْرَبُ بِهَا عِبَادُ ٱللَّهِ يُفَجِّرُونَهَا تَفْجِيرًا",
        "options": [
          {
            "text": "يَشْهَدُهُ ٱلْمُقَرَّبُونَ",
            "value": 0
          },
          {
            "text": "وَيَوْمَ يُعْرَضُ ٱلَّذِينَ كَفَرُوا۟ عَلَى ٱلنَّارِ أَذْهَبْتُمْ طَيِّبَـٰتِكُمْ فِى حَيَاتِكُمُ ٱلدُّنْيَا وَٱسْتَمْتَعْتُم بِهَا فَٱلْيَوْمَ تُجْزَوْنَ عَذَابَ ٱلْهُونِ بِمَا كُنتُمْ تَسْتَكْبِرُونَ فِى ٱلْأَرْضِ بِغَيْرِ ٱلْحَقِّ وَبِمَا كُنتُمْ تَفْسُقُونَ",
            "value": 0
          },
          {
            "text": " وَٱلْفَجْرِ",
            "value": 0
          },
          {
            "text": "يُوفُونَ بِٱلنَّذْرِ وَيَخَافُونَ يَوْمًا كَانَ شَرُّهُۥ مُسْتَطِيرًا",
            "value": 1
          }
        ]
      },
      {
        "question": "فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ",
        "options": [
          {
            "text": "بَلِ ٱلَّذِينَ كَفَرُوا۟ يُكَذِّبُونَ",
            "value": 0
          },
          {
            "text": "وَإِلَى ٱلسَّمَآءِ كَيْفَ رُفِعَتْ",
            "value": 0
          },
          {
            "text": "أَلَمْ تَرَ إِلَى ٱلَّذِينَ نُهُوا۟ عَنِ ٱلنَّجْوَىٰ ثُمَّ يَعُودُونَ لِمَا نُهُوا۟ عَنْهُ وَيَتَنَـٰجَوْنَ بِٱلْإِثْمِ وَٱلْعُدْوَٰنِ وَمَعْصِيَتِ ٱلرَّسُولِ وَإِذَا جَآءُوكَ حَيَّوْكَ بِمَا لَمْ يُحَيِّكَ بِهِ ٱللَّهُ وَيَقُولُونَ فِىٓ أَنفُسِهِمْ لَوْلَا يُعَذِّبُنَا ٱللَّهُ بِمَا نَقُولُ ۚ حَسْبُهُمْ جَهَنَّمُ يَصْلَوْنَهَا ۖ فَبِئْسَ ٱلْمَصِيرُ",
            "value": 0
          },
          {
            "text": "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ",
            "value": 1
          }
        ]
      },
      {
        "question": "۞ أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَيَنظُرُوا۟ كَيْفَ كَانَ عَـٰقِبَةُ ٱلَّذِينَ مِن قَبْلِهِمْ ۚ دَمَّرَ ٱللَّهُ عَلَيْهِمْ ۖ وَلِلْكَـٰفِرِينَ أَمْثَـٰلُهَا",
        "options": [
          {
            "text": "ذَٰلِكَ بِأَنَّ ٱللَّهَ مَوْلَى ٱلَّذِينَ ءَامَنُوا۟ وَأَنَّ ٱلْكَـٰفِرِينَ لَا مَوْلَىٰ لَهُمْ",
            "value": 1
          },
          {
            "text": "قَدْ فَرَضَ ٱللَّهُ لَكُمْ تَحِلَّةَ أَيْمَـٰنِكُمْ ۚ وَٱللَّهُ مَوْلَىٰكُمْ ۖ وَهُوَ ٱلْعَلِيمُ ٱلْحَكِيمُ",
            "value": 0
          },
          {
            "text": "ذَٰلِكَ بِأَنَّهُمْ قَالُوا۟ لِلَّذِينَ كَرِهُوا۟ مَا نَزَّلَ ٱللَّهُ سَنُطِيعُكُمْ فِى بَعْضِ ٱلْأَمْرِ ۖ وَٱللَّهُ يَعْلَمُ إِسْرَارَهُمْ",
            "value": 0
          },
          {
            "text": "حِكْمَةٌۢ بَـٰلِغَةٌ ۖ فَمَا تُغْنِ ٱلنُّذُرُ",
            "value": 0
          }
        ]
      },
      {
        "question": "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ",
        "options": [
          {
            "text": "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُۥ",
            "value": 1
          },
          {
            "text": "وَلَا تُطِعْ كُلَّ حَلَّافٍ مَّهِينٍ",
            "value": 0
          },
          {
            "text": "خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ",
            "value": 0
          },
          {
            "text": "وَأَمَّا ٱلْقَـٰسِطُونَ فَكَانُوا۟ لِجَهَنَّمَ حَطَبًا",
            "value": 0
          }
        ]
      },
      {
        "question": "وَفِى مُوسَىٰٓ إِذْ أَرْسَلْنَـٰهُ إِلَىٰ فِرْعَوْنَ بِسُلْطَـٰنٍ مُّبِينٍ",
        "options": [
          {
            "text": "إِلَّا ٱلْمُصَلِّينَ",
            "value": 0
          },
          {
            "text": "فَتَوَلَّىٰ بِرُكْنِهِۦ وَقَالَ سَـٰحِرٌ أَوْ مَجْنُونٌ",
            "value": 1
          },
          {
            "text": "فَلَآ أُقْسِمُ بِرَبِّ ٱلْمَشَـٰرِقِ وَٱلْمَغَـٰرِبِ إِنَّا لَقَـٰدِرُونَ",
            "value": 0
          },
          {
            "text": "فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ",
            "value": 0
          }
        ]
      }
    ],
    "meta": {
      "type": "guessVerseBySurah",
      "select": [
        46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
        64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
        82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
        100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
        114
      ],
      "amount": 5
    }
  }
}
```

Response (401 - Unauthorized)

```json
{
  "message": "Unauthorized",
  "status": 401
}
```

## 6. GET /users

Request

- headers:

```json
{
  "Authorization": "Bearer <string token>"
}
```

Response (200 - OK)

```json
{
  "data": [
    {
      "id": 18,
      "email": "farachdiba200203@gmail.com",
      "points": 1200
    },
    {
      "id": 17,
      "email": "diba@mail.com",
      "points": 480
    },
    {
      "id": 1,
      "email": "user@mail.com",
      "points": 400
    },
    {
      "id": 9,
      "email": "user1@mail.com",
      "points": 40
    },
    {
      "id": 23,
      "email": "bira@mail.com",
      "points": 0
    },
    {
      "id": 36,
      "email": "user2@mail.com",
      "points": 0
    },
    {
      "id": 40,
      "email": "user3@mail.com",
      "points": 0
    },
    {
      "id": 16,
      "email": "jeffmaollx@gmail.com",
      "points": 0
    },
    {
      "id": 60,
      "email": "del@mail.com",
      "points": 0
    },
    {
      "id": 62,
      "email": "dib@mail.com",
      "points": 0
    }
  ]
}
```

Response (401 - Unauthorized)

```json
{
  "message": "Unauthorized",
  "status": 401
}
```

## 7. PATCH /user-points

Request

- headers:

```json
{
  "Authorization": "Bearer <string token>"
}
```

#### Request-Body

```js
{
    totalPoints: integer,
}
```

Response (200 - OK)

```json
{
  "message": "Success update user points"
}
```

Response (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```

#### Response ()
