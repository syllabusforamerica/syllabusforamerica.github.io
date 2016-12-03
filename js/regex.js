const tags = 'twoonestcentury abortifacients abortion abortionapplicants abortionservices decisionmaking lawandlegislation moralandethicalaspects pregnancy pregnantwomen prochoicemovement prolifemovement rapidcity rapidcitysd socialconditions southdakota unwanted womensrights';

function checkTagsForTag(tag) {
  let re = new RegExp(tag);
  let result = re.test(tags);
  console.log(result);
  return true;
}

checkTagsForTag("fuck");
