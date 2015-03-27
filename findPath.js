var contantPath = {
	'newdelhi': ['mumbai', 'kolkata'],
	'mumbai': ['newdelhi', 'kolkata', 'hydrabad', 'chennai', 'banglore'],
	'banglore': ['mumbai', 'hydrabad', 'chennai'],
	'hydrabad': ['mumbai', 'banglore', 'kolkata'],
	'chennai': ['banglore', 'mumbai', 'kolkata'],
	'kolkata': ['chennai', 'hydrabad', 'mumbai', 'newdelhi']
}

var roots = function(sorce,sourceStoppege,destination, count,root){
	if(count == sourceStoppege.length)
		return root;
	if(sourceStoppege[count] == destination){
		root.push(sorce+ ' - '+destination);
		count = count + 1;
	}
	var newSource = sourceStoppege[count];
	if(contantPath[newSource].indexOf(destination) != -1){
		root.push(sorce + ' - ' + newSource + ' - ' + destination);
	}
	return roots(sorce,sourceStoppege,destination,count+1,root);
}

var stopRepeatetion = function(array,sorce) {
	var flagsWithoutRepeatetion = [];
	array.forEach(function(data) {
		if (flagsWithoutRepeatetion.indexOf(data) == -1)
			flagsWithoutRepeatetion.push(data)
	})
	return flagsWithoutRepeatetion.map(function(city){
		return (sorce + ' - ' + city).toUpperCase();
	});
}

var sorceDestination = function(sourceAndDestination){
	var root = [];
	sorce = sourceAndDestination[0].toLowerCase();
	destination = sourceAndDestination[1].toLowerCase();
	var sourceStoppege = contantPath[sorce];
	allRoots = sourceStoppege.map(function(city){
		if(city == destination)
			return city;
		return roots(city,contantPath[city],destination,0,root).join('\n')
	})
	return stopRepeatetion(allRoots.join('\n').split('\n'),sorce).join('\n');
}

console.log(sorceDestination(process.argv.slice(2)));
