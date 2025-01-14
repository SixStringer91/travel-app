export const daysObj = {
  ENG: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  RU: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ],
  BY: [
    'Панядзелак ',
    'Аўторак',
    'Серада',
    'Чацвер',
    'Пятніца',
    'Субота',
    'Нядзела'
  ]
};

export const regions: { [key: string]: string } = {
  Berlin: 'Europe/Berlin',
  NewDelhi: 'Asia/Kolkata',
  Brasilia: 'Brazil/DeNoronha',
  Pyongyang: 'Asia/Pyongyang',
  Oslo: 'Europe/Oslo',
  Abuja: 'Europe/Oslo',
  Suva: 'Pacific/Nauru',
  MexicoCity: 'America/Mexico_City'
};

export const monthsObj = {
  ENG: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  RU: [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ],
  BY: [
    'Студня',
    'Лютага',
    'Сакавiка',
    'Красавiка',
    'Мая',
    'Червня',
    'Лiпня',
    'Жнiвня',
    'Верасня',
    'Кастрычнiка',
    'Лiстапада',
    'Снежня'
  ]
};

export const dateGeneral = {
	ru: {
		days: daysObj.RU,
		month: monthsObj.RU
	},
	en: {
		days: daysObj.ENG,
		month: monthsObj.ENG
	},
	be: {
		days: daysObj.BY,
		month: monthsObj.BY
	}

}

