/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher1 = {
    firstName: "Alex",
    lastName: "Terieur",
    fullTimeEmployee: true,
    location: "Fréjus",
    contract: "CDI"
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return ("".concat(firstName[0], ". ").concat(lastName));
};
// Classe qui implémente l'interface
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sUUFBUSxHQUFZO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDZjtBQU1ELElBQU0sU0FBUyxHQUFjO0lBQzVCLFNBQVMsRUFBRSxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsRUFBRTtDQUNwQjtBQU1ELElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQWlCLEVBQUUsUUFBZ0I7SUFDOUUsT0FBTyxDQUFDLFVBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQWNELG9DQUFvQztBQUNwQztJQUlDLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDQyxPQUFPLG1CQUFtQjtJQUMzQixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVM7SUFDdEIsQ0FBQztJQUdGLG1CQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG5cdHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuXHRmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuXHR5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcblx0bG9jYXRpb246IHN0cmluZztcblx0W3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmNvbnN0IHRlYWNoZXIxOiBUZWFjaGVyID0ge1xuXHRmaXJzdE5hbWU6IFwiQWxleFwiLFxuXHRsYXN0TmFtZTogXCJUZXJpZXVyXCIsXG5cdGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG5cdGxvY2F0aW9uOiBcIkZyw6lqdXNcIixcblx0Y29udHJhY3Q6IFwiQ0RJXCIgXG59XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuXHRmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59XG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG5cdChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZ1xufVxuXG5jb25zdCBwcmludFRlYWNoZXI6IHByaW50VGVhY2hlckZ1bmN0aW9uID0gKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSA9PiB7XG5cdHJldHVybiAoYCR7Zmlyc3ROYW1lWzBdfS4gJHtsYXN0TmFtZX1gKTtcbn1cblxuXG4vLyBJbnRlcmZhY2UgcG91ciBsJ2luc3RhbmNlXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZSgpOiBzdHJpbmc7XG59XG5cbi8vIEludGVyZmFjZSBwb3VyIGxlIGNvbnN0cnVjdGV1clxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0NvbnN0cnVjdG9yIHtcbiAgICBuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzSW50ZXJmYWNlO1xufVxuXG4vLyBDbGFzc2UgcXVpIGltcGzDqW1lbnRlIGwnaW50ZXJmYWNlXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0XG5cdGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG5cdFx0dGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuXHR9XG5cdFxuXHR3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuXHRcdHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCJcblx0fVxuXG5cdGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlyc3ROYW1lXG5cdH1cblxuXHRcbn0iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9