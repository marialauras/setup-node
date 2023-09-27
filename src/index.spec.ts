import Person from "."

it("should know my name", () => {
    const person = new Person()
    expect(person.sayMyName()).toBe("Maria")
})
