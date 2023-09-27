import Person from "@/person"

it("should say hello", () => {
    const person = new Person()
    expect(person.sayHello()).toBe("hello world!")
})

it("should say bye", () => {
    const person = new Person()
    expect(person.sayBye()).toBe("bye world!")
})
