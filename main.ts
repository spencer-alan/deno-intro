interface Person {
  firstname: string;
  lastname: string;
}

function sayHello(p: Person): string {
  return `Hello, ${p.firstname}!`;
}

const first: Person = {
  firstname: "Spencer",
  lastname: "Smith",
};

console.log(sayHello(first));
