export interface Course {
    name: string
    price: string
    diets: string[]
  }

 export interface DailyMenu {
    courses: Course[];
  }
