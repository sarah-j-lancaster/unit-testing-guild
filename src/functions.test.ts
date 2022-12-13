import {
  convertDataPeopleToSearchString,
  getTopicSubset,
  isFive,
  Topics,
} from "./functions";

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

const opportunityTopic: Topics = {
  "Topic Name": "Opportunity",
  "Title (from Video)": ["45678"],
  "vimeoId (from Video)": ["45678"],
};
const sellAndSupportTopic: Topics = {
  "Topic Name": "Sell & Support",
  "Title (from Video)": ["56789"],
  "vimeoId (from Video)": ["56789"],
};
const adaptabilityTopic: Topics = {
  "Topic Name": "Adaptability",
  "Title (from Video)": ["1345"],
  "vimeoId (from Video)": ["1345"],
};

const protectAndComplyTopic: Topics = {
  "Topic Name": "Protect & Comply",
  "Title (from Video)": ["5643"],
  "vimeoId (from Video)": ["5643"],
};

const mixTopics = [
  opportunityTopic,
  sellAndSupportTopic,
  adaptabilityTopic,
  protectAndComplyTopic,
];
const allSubsetTopics = [opportunityTopic, sellAndSupportTopic];
const noSubsetTopics = [adaptabilityTopic, protectAndComplyTopic];

test.each`
  topics             | subset                                     | testDescription
  ${mixTopics}       | ${[opportunityTopic, sellAndSupportTopic]} | ${"there are a mix of subset and other topics"}
  ${allSubsetTopics} | ${[opportunityTopic, sellAndSupportTopic]} | ${"there are only subset topics"}
  ${noSubsetTopics}  | ${[]}                                      | ${"there are no subset topics"}
  ${[]}              | ${[]}                                      | ${"there are no topics"}
`(
  "filters subset topics correctly when $testDescription",
  ({ topics, subset }) => {
    const actual = getTopicSubset(topics);
    expect(actual).toEqual(subset);
  }
);
