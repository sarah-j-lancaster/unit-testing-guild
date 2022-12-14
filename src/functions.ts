export const addFive = (number: number): number => number + 5;

export const subtractFive = (number: number): number => number - 5;

export const isFive = (number: number): boolean => number === 5;

type DataPeople = { name: string; role: string };
export type DataPeopleSection = {
  title: string;
  people: DataPeople[];
};
export const convertDataPeopleToSearchString = (
  people: DataPeopleSection[]
): string => {
  const peopleContent = people.map((p) => {
    const title = `${p.title}:`;
    const peopleStrings = p.people.map((q) => {
      return `${q.name} - ${q.role}`;
    });
    const content = [title, ...peopleStrings];
    return content.join(" ");
  });
  return peopleContent.join(", ");
};

export type Topics = {
  "Topic Name"?: string;
  "Title (from Video)"?: string[];
  "vimeoId (from Video)"?: string[];
};

export const getTopicSubset = (topics: Topics[]): Topics[] => {
  const subsetNames = ["opportunity", "sell & support", "business model"];
  return topics.filter((topic) =>
    subsetNames.includes((topic["Topic Name"] ?? "").toLowerCase())
  );
};
