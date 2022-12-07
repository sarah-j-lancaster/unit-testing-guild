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
    const peopleStrings = p.people.map((q, index) => {
      const isSolo = p.people.length === 1;
      const isFormatted = !isSolo && index !== p.people.length - 1;
      return `${q.name} - ${q.role}${isFormatted ? "," : ""}`;
    });
    const content = [title, ...peopleStrings];
    return content.join(" ");
  });
  return peopleContent.join(", ");
};
