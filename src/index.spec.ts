import Person from "@/index"

it("should know my name", () => {
    const person = new Person()
    expect(person.sayMyName()).toBe("Maria")
})
