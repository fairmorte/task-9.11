const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алла",
            "id_2": "Вероника",
            "id_3": "Кристина",
            "id_4": "Жанна",
            "id_5": "Валерия",
            "id_6": "Надежда",
            "id_7": "Анастасия",
            "id_8": "Майя",
            "id_9": "Ванесса",
            "id_10": "Феодора"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        }
        else
            return this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        }
        else
            return this.randomValue(this.surnameJson) + 'а';
    },
        
    randomYearOfBirth: function () {

        return this.randomIntNumber(1940, 2000);

    },


    randomGender: function() {
    
        const male = this.randomIntNumber();
        let gender = male == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        // this.person.gender = this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.yearOfBirth = this.randomYearOfBirth()
        this.person.surName = this.randomSurname();
        return this.person;
    }
};
