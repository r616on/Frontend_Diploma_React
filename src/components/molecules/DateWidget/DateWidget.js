import React from "react";
// import { Link } from "react-router-dom";
import { ConfigProvider } from "antd";
import DatePicker from "./DatePicker";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import "antd/dist/antd.css";
import "./style.scss";

const localCastom = {
  locale: "ru",
  Pagination: {
    items_per_page: "/ стр.",
    jump_to: "Перейти",
    jump_to_confirm: "подтвердить",
    page: "Страница",
    prev_page: "Назад",
    next_page: "Вперед",
    prev_5: "Предыдущие 5",
    next_5: "Следующие 5",
    prev_3: "Предыдущие 3",
    next_3: "Следующие 3",
    page_size: "размер страницы",
  },
  DatePicker: {
    lang: {
      placeholder: "Выберите дату",
      yearPlaceholder: "Выберите год",
      quarterPlaceholder: "Выберите квартал",
      monthPlaceholder: "Выберите месяц",
      weekPlaceholder: "Выберите неделю",
      rangePlaceholder: ["Начальная дата", "Конечная дата"],
      rangeYearPlaceholder: ["Начальный год", "Год окончания"],
      rangeMonthPlaceholder: ["Начальный месяц", "Конечный месяц"],
      rangeWeekPlaceholder: ["Начальная неделя", "Конечная неделя"],
      locale: "ru_RU",
      today: "Сегодня",
      now: "Сейчас",
      backToToday: "Текущая дата",
      ok: "ОК",
      clear: "Очистить",
      month: "Месяц",
      year: "Год",
      timeSelect: "Выбрать время",
      dateSelect: "Выбрать дату",
      monthSelect: "Выбрать месяц",
      yearSelect: "Выбрать год",
      decadeSelect: "Выбрать десятилетие",
      yearFormat: "YYYY",
      dateFormat: "D-M-YYYY",
      dayFormat: "D",
      dateTimeFormat: "D-M-YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Предыдущий месяц (PageUp)",
      nextMonth: "Следующий месяц (PageDown)",
      previousYear: "Предыдущий год (Control + left)",
      nextYear: "Следующий год (Control + right)",
      previousDecade: "Предыдущее десятилетие",
      nextDecade: "Следущее десятилетие",
      previousCentury: "Предыдущий век",
      nextCentury: "Следующий век",
    },
    timePickerLocale: {
      placeholder: "Выберите время",
      rangePlaceholder: ["Время начала", "Время окончания"],
    },
  },
  TimePicker: {
    placeholder: "Выберите время",
    rangePlaceholder: ["Время начала", "Время окончания"],
  },
  Calendar: {
    lang: {
      placeholder: "Выберите дату",
      yearPlaceholder: "Выберите год",
      quarterPlaceholder: "Выберите квартал",
      monthPlaceholder: "Выберите месяц",
      weekPlaceholder: "Выберите неделю",
      rangePlaceholder: ["Начальная дата", "Конечная дата"],
      rangeYearPlaceholder: ["Начальный год", "Год окончания"],
      rangeMonthPlaceholder: ["Начальный месяц", "Конечный месяц"],
      rangeWeekPlaceholder: ["Начальная неделя", "Конечная неделя"],
      locale: "ru_RU",
      today: "Сегодня",
      now: "Сейчас",
      backToToday: "Текущая дата",
      ok: "ОК",
      clear: "Очистить",
      month: "Месяц",
      year: "Год",
      timeSelect: "Выбрать время",
      dateSelect: "Выбрать дату",
      monthSelect: "Выбрать месяц",
      yearSelect: "Выбрать год",
      decadeSelect: "Выбрать десятилетие",
      yearFormat: "YYYY",
      dateFormat: "D-M-YYYY",
      dayFormat: "D",
      dateTimeFormat: "D-M-YYYY HH:mm:ss",
      monthBeforeYear: true,
      previousMonth: "Предыдущий месяц (PageUp)",
      nextMonth: "Следующий месяц (PageDown)",
      previousYear: "Предыдущий год (Control + left)",
      nextYear: "Следующий год (Control + right)",
      previousDecade: "Предыдущее десятилетие",
      nextDecade: "Следущее десятилетие",
      previousCentury: "Предыдущий век",
      nextCentury: "Следующий век",
    },
    timePickerLocale: {
      placeholder: "Выберите время",
      rangePlaceholder: ["Время начала", "Время окончания"],
    },
  },
  global: {
    placeholder: "Пожалуйста выберите",
  },
  Table: {
    filterTitle: "Фильтр",
    filterConfirm: "OK",
    filterReset: "Сбросить",
    filterEmptyText: "Без фильтров",
    emptyText: "Нет данных",
    selectAll: "Выбрать всё",
    selectInvert: "Инвертировать выбор",
    selectNone: "Очистить все данные",
    selectionAll: "Выбрать все данные",
    sortTitle: "Сортировка",
    expand: "Развернуть строку",
    collapse: "Свернуть строку",
    triggerDesc: "Нажмите для сортировки по убыванию",
    triggerAsc: "Нажмите для сортировки по возрастанию",
    cancelSort: "Нажмите, чтобы отменить сортировку",
  },
  Modal: {
    okText: "OK",
    cancelText: "Отмена",
    justOkText: "OK",
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Отмена",
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Поиск",
    itemUnit: "элем.",
    itemsUnit: "элем.",
    remove: "Удалить",
    selectAll: "Выбрать все данные",
    selectCurrent: "Выбрать текущую страницу",
    selectInvert: "Показать в обратном порядке",
    removeAll: "Удалить все данные",
    removeCurrent: "Удалить текущую страницу",
  },
  Upload: {
    uploading: "Загрузка...",
    removeFile: "Удалить файл",
    uploadError: "При загрузке произошла ошибка",
    previewFile: "Предпросмотр файла",
    downloadFile: "Загрузить файл",
  },
  Empty: {
    description: "Нет данных",
  },
  Icon: {
    icon: "иконка",
  },
  Text: {
    edit: "Редактировать",
    copy: "Копировать",
    copied: "Скопировано",
    expand: "Раскрыть",
  },
  PageHeader: {
    back: "Назад",
  },
  Form: {
    defaultValidateMessages: {
      default: "Ошибка проверки поля ${label}",
      required: "Пожалуйста, введите ${label}",
      enum: "${label} должен быть одним из [${enum}]",
      whitespace: "${label} не может быть пустым",
      date: {
        format: "${label} не правильный формат даты",
        parse: "${label} не может быть преобразовано в дату",
        invalid: "${label} не является корректной датой",
      },
      types: {
        string: "${label} не является типом ${type}",
        method: "${label} не является типом ${type}",
        array: "${label} не является типом ${type}",
        object: "${label} не является типом ${type}",
        number: "${label} не является типом ${type}",
        date: "${label} не является типом ${type}",
        boolean: "${label} не является типом ${type}",
        integer: "${label} не является типом ${type}",
        float: "${label} не является типом ${type}",
        regexp: "${label} не является типом ${type}",
        email: "${label} не является типом ${type}",
        url: "${label} не является типом ${type}",
        hex: "${label} не является типом ${type}",
      },
      string: {
        len: "${label} должна быть ${len} символов",
        min: "${label} должна быть больше или равна ${min} символов",
        max: "${label} должна быть меньше или равна ${max} символов",
        range: "Длина ${label} должна быть между ${min}-${max} символами",
      },
      number: {
        len: "${label} должна быть равна ${len}",
        min: "${label} должна быть больше или равна ${min}",
        max: "${label} должна быть меньше или равна ${max}",
      },
      array: {
        len: "Количество элементов ${label} должно быть равно ${len}",
        min: "Количество элементов ${label} должно быть больше или равно ${min}",
        max: "Количество элементов ${label} должно быть меньше или равно ${max}",
        range:
          "Количество элементов ${label} должно быть между ${min} и ${max}",
      },
      pattern: {
        mismatch: "${label} не соответствует шаблону ${pattern}",
      },
    },
  },
  Image: {
    preview: "Предпросмотр",
  },
};

function DateWidget() {
  console.log(locale);
  const dateFormat = "DD.MM.YYYY";
  return (
    <div className="DateWidget">
      <ConfigProvider locale={localCastom}>
        <h3 className="DateWidget_title">Дата поездки</h3>
        <DatePicker
          className="DateWidget__date-picker"
          allowClear={false}
          format={dateFormat}
        />
        <h3 className="DateWidget_title">Дата возвращения</h3>
        <DatePicker
          className="DateWidget__date-picker"
          allowClear={false}
          format={dateFormat}
        />
      </ConfigProvider>
    </div>
  );
}

export default DateWidget;
