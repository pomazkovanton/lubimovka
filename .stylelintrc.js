module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-order', 'stylelint-color-format'],
  ignoreFiles: ['styles/vendor/**', '*.min.css'],
  rules: {
    'color-format/format': {
      format: 'rgba',
    },
    'order/order': [
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'rule',
        selector: '^&::(before|after)',
      },
      {
        type: 'rule',
        selector: '^&:\\w',
      },
      {
        type: 'rule',
        selector: '^&_',
      },
      {
        type: 'rule',
        selector: '^.',
      },
    ],
    'order/properties-order': [
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-left',
      'padding-bottom',
      'display',
      'visibility',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'clip',
      'zoom',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'flex',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'flex-shrink',
      'flex-grow',
      'flex-basis',
      'order',
      'flex-pack',
      'opacity',
      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',
      'font',
      'font-family',
      'font-size',
      'line-height',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'text-align',
      'text-align-last',
      'vertical-align',
      'white-space',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      'text-justify',
      'letter-spacing',
      'word-spacing',
      'text-outline',
      'text-transform',
      'text-wrap',
      'text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      'text-shadow',
      'word-wrap',
      'word-break',
      'tab-size',
      'hyphens',
      'pointer-events',
      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',
      'color',
      'background',
      'background-color',
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-clip',
      'background-origin',
      'background-size',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'box-shadow',
      'box-decoration-break',
      'transition',
      'transition-duration',
      'transition-delay',
      'transition-timing-function',
      'transition-property',
      'transform',
      'transform-origin',
      'animation',
      'animation-name',
      'animation-duration',
      'animation-play-state',
      'animation-timing-function',
      'animation-delay',
      'animation-iteration-count',
      'animation-direction',
      'backface-visibility',
      'will-change',
      'cursor',
      'user-select',
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'blockless-after-same-name-blockless', 'inside-block'],
        message: '🙀 Оставь пустую строку 🔫 перед @-правилом 📗',
      },
    ],
    'at-rule-name-case': [
      'lower',
      {
        message: '📝 Пиши @-правила 📗 строчными 🔡 буквами',
      },
    ],
    'at-rule-name-space-after': [
      'always',
      {
        message: '😼 Поставь пробел ⏹ после @-правила 📗',
      },
    ],
    'at-rule-no-vendor-prefix': [
      true,
      {
        message: '😼 Не используй вендорные префиксы 👶 в @-правилах 📗',
      },
    ],
    'at-rule-semicolon-newline-after': [
      'always',
      {
        message: '😼 Поставь перенос строки 👇 после @-правила 📗',
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        message: '😼 Поставь перенос строки 👇 после фигурной скобки',
      },
    ],
    'block-closing-brace-newline-before': [
      'always',
      {
        message: '😼 Поставь перенос строки 👇 перед фигурной скобкой',
      },
    ],
    'block-opening-brace-newline-after': [
      'always',
      {
        message: '😼 Поставь перенос строки 👇 после открывающейся фигурной скобки',
      },
    ],
    'block-opening-brace-space-before': [
      'always',
      {
        message: '😼 Поставь пробел ⏹ перед фигурной скобкой',
      },
    ],
    'color-hex-case': [
      'lower',
      {
        message: '😾 Указывай значения HEX цветов 🎨 строчными буквами 🔡, а не заглавными 🔠',
      },
    ],
    'color-hex-length': 'long',
    'color-named': [
      'never',
      {
        message: '⛔📝 Не пиши цвета 🎨 ключевыми словами, используй HEX или RGBA',
      },
    ],
    'color-no-invalid-hex': [
      true,
      {
        message: '🙀 HEX цвет 🎨 прописан с ошибкой - исправь 🤼',
      },
    ],
    'comment-whitespace-inside': [
      'always',
      {
        message: '😼 Поставь пробелы ⏹ внутри комментария',
      },
    ],
    'declaration-bang-space-after': [
      'never',
      {
        message: '😠 Убери пробел ⏹ после восклицательного ❗ знака',
      },
    ],
    'declaration-bang-space-before': [
      'always',
      {
        message: '😼 Поставь пробел ⏹ перед восклицательным ❗ знаком',
      },
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
        message: '⛔ Не повторяй правила 📗',
      },
    ],
    'declaration-block-semicolon-newline-after': [
      'always',
      {
        message: '😼 Поставь перенос строки после правила 📗',
      },
    ],
    'declaration-block-single-line-max-declarations': [
      1,
      {
        message: '🤖 На одной строке должно быть только одно правило 📗',
      },
    ],
    'declaration-block-trailing-semicolon': [
      'always',
      {
        message: '😼 Поставь точку с запятой после каждого правила 📗',
      },
    ],
    'declaration-colon-space-after': [
      'always',
      {
        message: '😼 Поставь пробел ⏹ после двоеточия в правилах 📗',
      },
    ],
    'declaration-colon-space-before': [
      'never',
      {
        message: '🤖 Не ставь пробел ⏹ перед двоеточием в правилах 📗',
      },
    ],
    'font-family-name-quotes': [
      'always-unless-keyword',
      {
        message: '👹 Название 📜 шрифта нужно заключить в кавычки, только если это не стандартное семейство',
      },
    ],
    'font-weight-notation': [
      'numeric',
      {
        message: '👹 Укажи плотность шрифта (жирность) числом 💯, а не словом 🆒',
      },
    ],
    'function-calc-no-unspaced-operator': [
      true,
      {
        message: '😠 Для calc() 💩 проставь пробелы ⏹ вокруг операторов',
      },
    ],
    'function-comma-newline-after': [
      'never-multi-line',
      {
        message: '⛔ Не используй переносы строк в аргументах функций',
      },
    ],
    'function-comma-space-after': [
      'always',
      {
        message: '😠 Поставь пробел ⏹ в функции после запятой',
      },
    ],
    'function-comma-space-before': [
      'never',
      {
        message: '⛔ Не ставь пробел ⏹ в функции перед запятой',
      },
    ],
    'function-linear-gradient-no-nonstandard-direction': [
      true,
      {
        message: '😠 Используй стандартный синтаксис градиентов 🌈',
      },
    ],
    'function-name-case': [
      'lower',
      {
        message: '😠 Пиши 📝 имена функций строчными буквами 🔡',
      },
    ],
    'function-url-quotes': 'always',
    indentation: [
      2,
      {
        message: '😠 Используй 2 пробела ⏹⏹ для выравнивания',
      },
    ],
    'length-zero-no-unit': [
      true,
      {
        message: '⛔ Не ставь единицы измерения для нулевых значений',
      },
    ],
    'max-empty-lines': [
      1,
      {
        message: '⛔ Не оставляй лишние пустые строки',
      },
    ],
    'media-feature-colon-space-after': [
      'always',
      {
        message: '😠 Поставь пробел ⏹ в @media после двоеточия',
      },
    ],
    'media-feature-colon-space-before': [
      'never',
      {
        message: '⛔ Не ставь пробел ⏹ перед двоеточием в @media',
      },
    ],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': [
      'never',
      {
        message: '⛔ Не ставь пробелы ⏹ внутри @media',
      },
    ],
    'media-feature-range-operator-space-before': 'never',
    'no-duplicate-selectors': [
      true,
      {
        message: '⛔ Не дублируй селекторы',
      },
    ],
    'no-eol-whitespace': [
      true,
      {
        message: '😠 Убери пробел ⏹ в конце строки',
        severity: 'warning',
      },
    ],
    'no-extra-semicolons': [
      true,
      {
        message: '😠 Убери лишние точки с запятой',
      },
    ],
    'number-leading-zero': [
      'always',
      {
        message: '👹 Поставь ноль 🅾 перед точкой в дробном значении',
      },
    ],
    'property-case': [
      'lower',
      {
        message: '👹 Свойства нужно указывать строчными 🔡 буквами',
      },
    ],
    'property-no-vendor-prefix': [
      true,
      {
        message: '⛔ Не используй вендорные префиксы',
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['after-single-line-comment', 'first-nested'],
        ignore: ['after-comment'],
        message: '👻 Проверь переносы строк между селекторами',
      },
    ],
    'selector-attribute-brackets-space-inside': [
      'never',
      {
        message: '⛔ Не ставь пробелы ⏹ внутри селектора атрибута',
      },
    ],
    'selector-attribute-operator-space-after': [
      'never',
      {
        message: '⛔ Не ставь пробелы ⏹ внутри селектора атрибута',
      },
    ],
    'selector-attribute-operator-space-before': [
      'never',
      {
        message: '⛔ Не ставь пробелы ⏹ внутри селектора атрибута',
      },
    ],
    'selector-attribute-quotes': [
      'always',
      {
        message: '😼 Возьми в ⏪ кавычки ⏩ атрибуты селектора',
      },
    ],
    'selector-combinator-space-after': [
      'always',
      {
        message: '😼 Поставь пробел ⏹ после комбинатора в селекторе',
      },
    ],
    'selector-combinator-space-before': [
      'always',
      {
        message: '😼 Поставь пробел ⏹ перед комбинатором в селекторе',
      },
    ],
    'selector-list-comma-newline-after': [
      'always',
      {
        message: '😼 Поставь перенос строки 🔃 после запятой в селекторах',
      },
    ],
    'selector-max-empty-lines': [
      0,
      {
        message: '⛔ Не ставь пустые строки в селекторах',
      },
    ],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': [
      'lower',
      {
        message: '👿 Пиши 📝 псевдоклассы строчными 🔡 буквами',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        message: '💀 Нет такого псевдокласса ☠',
      },
    ],
    'selector-pseudo-class-parentheses-space-inside': [
      'never',
      {
        message: '👿 Не ставь пробелы ⏹ внутри скобок в псевдоселекторах',
      },
    ],
    'selector-pseudo-element-case': [
      'lower',
      {
        message: '👿 Прописывай псевдоэлементы строчными 🔡 буквами',
      },
    ],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        message: '💀 Нет такого псевдоэлемента ☠',
      },
    ],
    'selector-type-case': [
      'lower',
      {
        message: '👿 Прописывай селекторы строчными 🔡 буквами',
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        message: '👽 Какой-то неправильный селектор',
      },
    ],
    'string-quotes': [
      'single',
      {
        message: '😤 Используй везде одинарные кавычки',
      },
    ],
    'unit-case': [
      'lower',
      {
        message: '😈 Используй строчные 🔡 буквы для единиц измерения',
      },
    ],
    'unit-no-unknown': [
      true,
      {
        message: '💀 Нет таких единиц измерения',
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        message: '😈 Прописывай значения свойств строчными 🔡 буквами',
      },
    ],
    'value-list-comma-newline-after': [
      'never-multi-line',
      {
        message: '⛔ Не используй переносы строк в значениях свойств',
      },
    ],
    'value-list-comma-space-after': [
      'always',
      {
        message: '😼 Поставь пробел ⏹ после запятой',
      },
    ],
    'value-no-vendor-prefix': true,
  },
};
