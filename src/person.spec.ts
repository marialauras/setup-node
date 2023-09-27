import Person from "@/person"

it("should know my name", () => {
    const person = new Person()
    expect(person.sayHello()).toBe("hello world!")
})
