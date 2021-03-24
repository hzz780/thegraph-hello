import {NewGravatar, UpdatedGravatar} from '../generated/Gravity/Gravity'
import {Gravatar, GravatarImage} from '../generated/schema'
import { log, BigInt } from '@graphprotocol/graph-ts'

export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.zzTest = 'hzzTestnewwww';
  gravatar.updateAt = event.block.timestamp;
  gravatar.createdAt = event.block.timestamp;
  gravatar.imageId = updateGravatarImage(true);

  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {

  // https://thegraph.com/docs/assemblyscript-api#logging-and-debugging
  // log.info('Message to be displayed: {}, {}, {}', [
  //   event.block.timestamp.toString(),
  //   event.block.number.toString(),
  //   'already a string',
  // ]);

  let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.zzTest = 'hzzTest';
  gravatar.updateAt = event.block.timestamp;
  gravatar.createdAt = event.block.timestamp;
  gravatar.imageId = updateGravatarImage(false);

  gravatar.save()
}

// 不可以使用 isNew?: boolean, 必须是明确的值
function updateGravatarImage(isNew: boolean): string {
  let id = '100';

  let gravatarImage = GravatarImage.load(id);
  if (gravatarImage === null) {
    gravatarImage = new GravatarImage(id);
    gravatarImage.count = BigInt.fromI32(1);
    gravatarImage.type = 'blue';
    gravatarImage.save();
  }
  // graphql 没有count的概念，如果需要处理分页，这样做会比较合适。
  if (isNew) {
    gravatarImage.count = gravatarImage.count.plus(BigInt.fromI32(1));
    gravatarImage.type = 'others';
    gravatarImage.save();
  }
  return gravatarImage.id;
}
