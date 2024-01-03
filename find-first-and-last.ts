function searchRange(nums: number[], target: number): number[] {
  // At least have a single target means the start and end index is the same
  //
  // If the target don't have at all inside the array means both start and end -1
  //
  // If the target have multiple times inside the nums we need to return the start and end index of target

  const start = nums.indexOf(target);
  const end = nums.lastIndexOf(target);

  return [start, end]
 }
