import { faker } from '@faker-js/faker';
const staff = [
    {
        img: faker.image.personPortrait({ width: 50, height: 50 }),
        alt: "Image 1",
        title: faker.person.fullName(),
        job: faker.person.jobTitle()
    },
    {
        img: faker.image.personPortrait({ width: 50, height: 50 }),
        alt: "Image 2",
        title: faker.person.fullName(),
        job: faker.person.jobTitle()
    },
    {
        img: faker.image.personPortrait({ width: 50, height: 50 }),
        alt: "Image 3",
        title: faker.person.fullName(),
        job: faker.person.jobTitle()
    }
    
]

export default staff
