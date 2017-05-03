let csvData = `
id,first name,last name,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com
`
const parseCSV = (data) => {
  var header = data.trim().split('\n').shift().split(',');
  for(i in header){
    if(header[i] === 'first name'){
      header[i] = header[i].replace('first name', 'firstName');
    } else if (header[i] === 'last name'){
      header[i] = header[i].replace('last name', 'lastName');
    };
  }
  var users = data.trim().split('\n').slice(1);
  json = [];
  for(i in users) {
    obj = {};
    let user_data = users[i].split(',');
    for(j in user_data) {
      if(header[j] === 'firstName'){
        user_data[j] = user_data[j].charAt(0).toUpperCase() + user_data[j].slice(1);
      }
      if(header[j] === 'lastName'){
        user_data[j] = user_data[j].charAt(0).toUpperCase() + user_data[j].slice(1);
      }
      obj[header[j]] = user_data[j];
    }
    json.push(obj);
  }
  return json;
}

console.log(parseCSV(csvData));

const search = ( data, entry ) => {

}
