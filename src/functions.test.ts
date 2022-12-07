import { convertDataPeopleToSearchString, isFive } from "./functions";

test("5 is 5", () => {
  expect(isFive(5)).toBeTruthy();
});
test("4 is not 5", () => {
  expect(isFive(4)).toBeFalsy();
});

test("it creates a string for indexing people", () => {
  const people = [
    {
      people: [
        {
          name: "Jane Doe",
          role: "Co-ordinator",
        },
      ],
      title: "Northland",
    },
    {
      people: [
        {
          name: "Jane Doe",
          role: "Director",
        },
        {
          name: "Johnathan Doe",
          role: "Director",
        },
        {
          name: "Jimin Park",
          role: "Main dancer",
        },
      ],
      title: "Auckland",
    },
  ];
  const expected =
    "Northland: Jane Doe - Co-ordinator, Auckland: Jane Doe - Director, Johnathan Doe - Director, Jimin Park - Main dancer";
  expect(convertDataPeopleToSearchString(people)).toEqual(expected);
});
