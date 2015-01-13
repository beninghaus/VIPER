var whichProxy = context.getVariable("whichProxy");
var applicationKey = context.getVariable(whichProxy + ".application.key");
var applicationSecret = context.getVariable(whichProxy + ".application.secret");
context.setVariable("application.key", applicationKey);
context.setVariable("application.secret", applicationSecret);
