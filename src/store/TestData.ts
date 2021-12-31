import Mock from "mockjs";
const Random = Mock.Random;

export function GetBook() {
  return Mock.mock({
    "id|+1": 0,
    name: GetBookName(),
    imgurl: "http://iph.href.lu/150x200/?text=@name",
    "select|1": false,
  });
}
export function GetBooks(): Array<any> {
  const data1 =Mock.mock({
    "data|10": [GetBook],
  }).data;
  // console.log(data1);
  return data1;
}
function GetBookName() {
  if (Random.boolean()) {
    return Random.name();
  } else {
    return Random.cname();
  }
}

export function GetText() {
  return Random.cparagraph(10000)
}