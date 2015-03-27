var allConnections = {
	"mum": ["blr","chn","hyd","del"],
	"blr": ["mum","chn","hyd"],
	"kol": ["mum","chn","hyd","del"],
	"hyd": ["mum","blr","kol"],
	"del": ["mum","kol"],
	"chn": ["mum","blr"],
	"a": ["b","chn"],
	"b": ["a"]
};

var allRoutes = {
    "blr" : ["mum","up","mp","kol"],
    "mum" : ["kol","mp","up","punjab"],
    "kol" : ["punjab","mp","up","mum"],
    "up"  : ["mp","mum","kol"],
    "mp" : ["up","punjab","hydrabad"],
    "punjab" : ["up","mp","mum"]
};

var stations = {
	"MUM" : ["BLR", "CHN", "KOL", "ND", "HYD"],
	"BLR" : ["MUM", "CHN", "HYD"],
	"CHN" : ["MUM", "BLR", "KOL"],
	"KOL" : ["MUM", "CHN", "ND", "HYD","ASM"],
	"ND" : ["MUM", "KOL"],
	"HYD" : ["MUM", "BLR", "KOL"]
};

var look = function(startDestinations,path) {
	var newStart = findstart(startDestinations,path);
	if(!newStart)
		return findstart(startDestinations,path);
	return newStart; 
}

var findstart = function(startlist,path){
	var newStart;
	startlist.some(function(start) {
		if(path.indexOf(start)<0) {
			newStart = start;
			return 1;
		}
	});
	return newStart;
}

var findPath = function (allConnections,start,destination,path) {
	var startDestinations = allConnections[start];
	path.push(start);
	if(startDestinations.indexOf(destination)>=0) {
		path.push(destination); 
		return path;
	} 
	var newStart = look(startDestinations,path);
	findPath(allConnections,newStart,destination,path);
	return path;
};

// console.log(findPath(allConnections,'chn','del',[]));
// console.log(findPath(allConnections,'b','hyd',[]));
// 
// var route  = findPath(allRoutes,"up","punjab",[]);
// console.log(route);

console.log(findPath(stations,'BLR','KOL',[]));
