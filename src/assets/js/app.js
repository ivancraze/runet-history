const headElem = document.getElementById("victorine__head");
const buttonsElem = document.getElementById("victorine__buttons");
const pagesElem = document.getElementById("victorine__pages");

//Класс, который представляет сам тест
class Quiz
{
    constructor(type, questions, results)
    {
        //Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
        this.type = type;

        //Массив с вопросами
        this.questions = questions;

        //Массив с возможными результатами
        this.results = results;

        //Количество набранных очков
        this.score = 0;

        //Номер результата из массива
        this.result = 0;

        //Номер текущего вопроса
        this.current = 0;
    }
    Click(index)
    {
        //Добавляем очки
        let value = this.questions[this.current].Click(index);
        this.score += value;

        let correct = -1;

        //Если было добавлено хотя одно очко, то считаем, что ответ верный
        if(value >= 1)
        {
            correct = index;
        }
        else
        {
            //Иначе ищем, какой ответ может быть правильным
            for(let i = 0; i < this.questions[this.current].answers.length; i++)
            {
                if(this.questions[this.current].answers[i].value >= 1)
                {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }
    //Переход к следующему вопросу
    Next()
    {
        this.current++;

        if(this.current >= this.questions.length)
        {
            this.End();
        }
    }
    //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
    End()
    {
        for(let i = 0; i < this.results.length; i++)
        {
            if(this.results[i].Check(this.score))
            {
                this.result = i;
            }
        }
    }
}

//Класс, представляющий вопрос
class Question
{
    constructor(text, answers)
    {
        this.text = text;
        this.answers = answers;
    }

    Click(index)
    {
        return this.answers[index].value;
    }
}

//Класс, представляющий ответ
class Answer
{
    constructor(text, value, picture)
    {
        this.text = text;
        this.value = value;
        this.picture = picture;
    }
}

//Класс, представляющий результат
class Result
{
    constructor(text, value)
    {
        this.text = text;
        this.value = value;
    }

    //Этот метод проверяет, достаточно ли очков набрал пользователь
    Check(value)
    {
        if(this.value <= value)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

//Массив с результатами
const results =
    [
        new Result("Вам многому нужно научиться", 0),
        new Result("Вы уже неплохо разбираетесь", 2),
        new Result("Ваш уровень выше среднего", 4),
        new Result("Вы в совершенстве знаете тему", 6)
    ];

//Массив с вопросами
const questions =
    [
        new Question("Что начали делать пользователи раньше: знакомиться или читать анекдоты?",
            [
                new Answer("Анекдот.ру", 1, "./assets/img/victorine/joke.png"),
                new Answer("Чат-кроватка", 0, "./assets/img/victorine/bed.png")
            ]),

        new Question("Кто сказал «О-оу»?",
            [
                new Answer("Аська", 1, "./assets/img/victorine/icq.png"),
                new Answer("Масяня", 0, "./assets/img/victorine/masyanya.png")
            ]),

        new Question("Где можно посмотреть в «Бездну»?",
            [
                new Answer("Хабр", 0, "./assets/img/victorine/habr.png"),
                new Answer("Башорг", 0, "./assets/img/victorine/bashorg.png")
            ]),
    ];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
    //Проверяем, есть ли ещё вопросы
    if(quiz.current < quiz.questions.length)
    {
        //Если есть, меняем вопрос в заголовке
        headElem.innerHTML = quiz.questions[quiz.current].text;

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";

        //Создаём кнопки для новых вариантов ответов
        for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
        {
            let btn = document.createElement("div");
            let image = document.createElement("img");

            image.src = quiz.questions[quiz.current].answers[i].picture;

            btn.className = "victorine__button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
            btn.prepend(image);
        }

        //Выводим номер текущего вопроса
        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

        const playerRating = []

        //Вызываем функцию, которая прикрепит события к новым кнопкам
        Init();
    }
    else
    {
        //Если это конец, то выводим результат
        buttonsElem.innerHTML = "";
        headElem.innerHTML = quiz.results[quiz.result].text;
        pagesElem.innerHTML = "Очки: " + quiz.score;
    }
}

function Init()
{
    //Находим все кнопки
    let btns = document.getElementsByClassName("victorine__button");

    for(let i = 0; i < btns.length; i++)
    {
        //Прикрепляем событие для каждой отдельной кнопки
        //При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index)
{
    //Получаем номер правильного ответа
    let correct = quiz.Click(index);

    //Находим все кнопки
    let btns = document.getElementsByClassName("victorine__button");

    //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
    if(quiz.type == 1)
    {
        if(correct >= 0)
        {
            btns[correct].className = "victorine__button victorine__button--correct";
        }

        if(index != correct)
        {
            btns[index].className = "victorine__button victorine__button--wrong";
        }
    }
    else
    {
        //Иначе просто подсвечиваем зелёным ответ пользователя
        btns[index].className = "victorine__button victorine__button--correct";
    }

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}